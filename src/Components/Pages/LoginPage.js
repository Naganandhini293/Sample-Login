import React, { useState } from "react";
import LoginLogo from "../asset/loginLogo.png";
import { Checkbox } from "@mui/material";
import { TfiFacebook } from "react-icons/tfi";
import { BsGoogle } from "react-icons/bs";
import { TfiLinkedin } from "react-icons/tfi";
import { TfiTwitterAlt } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import "../Style/LoginPage.css";
function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    return (
        <div className="login-container">
            <div className="login-content-conatiner">
                <form className="login-in-inner-content-container">
                    <div className="login-title">Sign In</div>
                    <div className="new-user-ctr">
                        <div>
                            <div>New User ?&nbsp;</div>
                        </div>
                        <div className="create-acct-ctr">Create an account</div>
                    </div>
                    <div className="login-input-ctr">
                        <input
                            placeholder="Username or email"
                            name="email"
                            className="email-input"
                            type="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                        <input
                            placeholder="Password"
                            name="password"
                            className="password-input"
                            type="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </div>
                    <div className="keep-me-sign-in-ctr">
                        <Checkbox />
                        <div>Keep me sign in</div>
                    </div>
                    <div
                        className="sign-in-btn"
                        onClick={() => {
                            localStorage.setItem("email", email);
                            navigate("/home");
                        }}
                    >
                        Sign In
                    </div>
                    <div className="sign-in-wth-ctr">
                        <div>Or Sign in with</div>
                    </div>
                    <div className="social-media-icon-ctr">
                        <BsGoogle />
                        <TfiFacebook />
                        <TfiLinkedin />
                        <TfiTwitterAlt />
                    </div>
                </form>
            </div>
            <div className="login-image-container">
                <img
                    src={LoginLogo}
                    alt="login-logo"
                    className="login-logo-img"
                />
            </div>
        </div>
    );
}

export default LoginPage;
