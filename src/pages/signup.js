import React from "react";
import { useSignUpPageStyles } from "../styles";
import SEO from "../components/shared/Seo";
import { Card, TextField, Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import {LoginWithFacebook} from './login';

function SignUpPage() {
  const classes = useSignUpPageStyles();

  return (
    <>
      <SEO title="Sign up"/>
      <section className={classes.section}>
        <article>
          <Card className={classes.card}>
            <div className={classes.cardHeader}/>
            <Typography className={classes.cardHeaderSubHeader}>
              Sign up to see photos and videos from your friends.
            </Typography>
            <LoginWithFacebook color="primary" iconColor="white" variant="contained"/>
            <div className={classes.orContainer}>
              <div className={classes.orLine}/>
              <div>
                <Typography color="textSecondary" variant="body2">
                  OR
                </Typography>
              </div>
              <div className={classes.orLine}/>
            </div>
            <form>
            <TextField
                className={classes.textField}
                fullWidth
                label="Email"
                margin="dense"
                type="email"
                variant="filled"
              />
              <TextField
                className={classes.textField}
                fullWidth
                label="Full Name"
                margin="dense"
                variant="filled"
              />
              <TextField
                autoComplete="username"
                className={classes.textField}
                fullWidth
                label="Username"
                margin="dense"
                variant="filled"
              />
              <TextField
                autoComplete="new-password"
                className={classes.textField}
                fullWidth
                label="Password"
                margin="dense"
                type="password"
                variant="filled"
              />
              <Button
                className={classes.button}
                color="primary"
                fullWidth
                type="submit"
                variant="contained"
              >
                Sign Up
              </Button>
            </form>
          </Card>
          <Card className={classes.loginCard}>
            <Typography align="right" variant="body2">
              Have an account?
            </Typography>
            <Link to="/accounts/login">
              <Button color="primary" className={classes.loginButton}>
                Login
              </Button>
            </Link>
          </Card>
        </article>
      </section>
    </>
  );
}

export default SignUpPage;
