import React from "react";
import { Form, Button } from "react-bootstrap";

function Input(props) {
  return (
    <React.Fragment>
      <Form>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={props.title}
            onChange={e => props.setTitle(e)}
            type="text"
            placeholder="Binance Is Awesome"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Slug</Form.Label>
          <Form.Control
            value={props.slug}
            onChange={e => props.setSlug(e)}
            type="text"
            placeholder="BNB1337"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Content</Form.Label>
          <Form.Control
            value={props.content}
            onChange={e => props.setContent(e)}
            type="text"
            placeholder="Binance is the home for digital asset trading"
          />
        </Form.Group>
        <Button variant="primary" onClick={e => props.postContent(e)}>
          Submit
        </Button>
      </Form>
    </React.Fragment>
  );
}

export default Input;
