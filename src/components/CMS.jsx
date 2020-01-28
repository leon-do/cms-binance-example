import React, { Component } from "react";
import axios from "axios";
import Item from "./Item";
import Input from "./Input";
import { Table } from "react-bootstrap";

// this handles the input form and lists the data
class CMS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url:
        process.env.NODE_ENV === "production"
          ? "https://api-binance-example.herokuapp.com"
          : "http://localhost:5000",
      list: [],
      title: "",
      slug: "",
      content: ""
    };
  }
  componentDidMount() {
    this.handleRead();
  }
  async handleCreateContent(e) {
    await axios.post(this.state.url + "/create", {
      title: this.state.title,
      slug: this.state.slug,
      content: this.state.content
    });
    this.handleRead();
  }
  async handleRead() {
    const res = await axios.get(this.state.url);
    const list = res.data;
    this.setState({ list });
  }
  async handleUpdate(updatedData) {
    await axios.post(this.state.url + "/update", { data: updatedData });
    alert("Update Complete");
  }
  async handleDelete(index) {
    const { list } = this.state;
    await axios.delete(this.state.url, { data: { text: list[index]._id } });
    this.handleRead();
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

  render() {
    return (
      <React.Fragment>
        <Input
          setTitle={e => this.handleSetTitle(e)}
          setSlug={e => this.handleSetSlug(e)}
          setContent={e => this.handleSetContent(e)}
          postContent={e => this.handleCreateContent(e)}
        ></Input>
        <br></br>
        <br></br>
        <br></br>
        <h1> Data </h1>
        <Table>
          <tbody>
            <tr>
              <td>Id</td>
              <td>Title</td>
              <td>Slug</td>
              <td>Content</td>
              <td>Update</td>
              <td>Delete</td>
            </tr>
            {this.state.list.map((val, index) => (
              <Item
                key={val._id}
                data={val}
                onDelete={() => this.handleDelete(index)}
                onUpdate={updatedData => this.handleUpdate(updatedData)}
              ></Item>
            ))}
          </tbody>
        </Table>
      </React.Fragment>
    );
  }
}

export default CMS;
