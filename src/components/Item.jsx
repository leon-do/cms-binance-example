import React, { Component } from "react";
class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.data._id,
      title: this.props.data.title,
      slug: this.props.data.slug,
      content: this.props.data.content
    };
  }
  handleTitle(title) {
    this.setState({ title });
  }
  handleSlug(slug) {
    this.setState({ slug });
  }
  handleContent(content) {
    this.setState({ content });
  }
  render() {
    return (
      <React.Fragment>
        <tr>
          <td>{this.props.data._id}</td>
          <td>
            <input
              defaultValue={this.props.data.title}
              onChange={e => this.handleTitle(e.target.value)}
            ></input>
          </td>
          <td>
            <input
              defaultValue={this.props.data.slug}
              onChange={e => this.handleSlug(e.target.value)}
            ></input>
          </td>
          <td>
            <input
              defaultValue={this.props.data.content}
              onChange={e => this.handleContent(e.target.value)}
            ></input>
          </td>
          <td>
            <button onClick={() => this.props.onUpdate(this.state)}>
              Update
            </button>
          </td>
          <td>
            <button onClick={() => this.props.onDelete()}> Delete </button>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

export default Item;
