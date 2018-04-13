import React, { Component } from "react";
import { Form, FormGroup, Label, Input } from 'reactstrap';

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellat, atque nulla, soluta vero reprehenderit numquam incidunt, rem quaerat quos voluptatum perferendis. Distinctio culpa iste atque blanditiis placeat qui ipsa?</h6>
                <Form>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input id="username" type="text" name="username" placeholder="enter username" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="su_password" type="password" name="password" placeholder="enter password" />
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default Signup;