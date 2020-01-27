import React, { Component } from "react";
import axios from "axios";
import Item from "./Item";
import Input from "./Input";
import {Table} from 'react-bootstrap'

// this handles the input form and lists the data
class CMS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: (process.env.PRODUCTION)? 'https://binance-api-example.herokuapp.com/' : 'http://localhost:5000',
      list: [],
      title: "",
      slug: "",
      content: ""
    };
  }
  componentDidMount() {
    this.getList();
  }
  async getList() {
    const res = await axios.get(this.state.url);
    const list = res.data;
    this.setState({ list });
  }
  async handleDelete(index) {
    const { list } = this.state;
    await axios.delete(this.state.url, { data: { text: list[index]._id } });
    this.getList();
  }
  handleSetTitle(e) {
    this.setState({ title: e.target.value });
  }
  handleSetSlug(e) {
    this.setState({ slug: e.target.value });
  }
  handleSetContent(e) {
    this.setState({ content: e.target.value });
  }
  async handlePostContent(e) {
    await axios.post(this.state.url, {
      title: this.state.title,
      slug: this.state.slug,
      content: this.state.content
    });
    this.getList();
  }
  render() {
    return (
      <React.Fragment>
        <Input
          setTitle={e => this.handleSetTitle(e)}
          setSlug={e => this.handleSetSlug(e)}
          setContent={e => this.handleSetContent(e)}
          postContent={e => this.handlePostContent(e)}
        ></Input>
          <br></br><br></br><br></br>
          <h1> Data </h1>
        <Table>
          <tbody>
            <tr>
              <td>Id</td>
              <td>Title</td>
              <td>Slug</td>
              <td>Content</td>
              <td>Delete</td>
            </tr>
            {this.state.list.map((val, index) => (
              <Item
                key={val._id}
                data={val}
                onDelete={() => this.handleDelete(index)}
              ></Item>
            ))}
          </tbody>
        </Table>
      </React.Fragment>
    );
  }
}

export default CMS;
