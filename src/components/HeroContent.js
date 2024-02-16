import React from "react";
import heroImg from "../assets/images/Explore-the-world.png";
import "./HeroContent.css";

export default function HeroContent() {
    return (
        <>
            <div className="hero-content">
                <img
                    className="hero-content__img"
                    src={heroImg}
                    alt="Explore-the-world"
                />
                <div className="hero-content__content">
                    <a
                        className="hero-content__button hero-content__button_explore"
                        href="https://google.com"
                    >
                        Explore the world!<i class="fa-solid fa-briefcase"></i>
                    </a>

                    <h1 className="hero-content__title">
                        Travel <span className="hero-content__title-span">top destination</span> of the world
                    </h1>
                    <p className="hero-content__text">
                        We always make our customer happy by providing as many
                        choices as possible
                    </p>

                    <a
                        className="hero-content__button hero-content__button_start"
                        href="https://google.com"
                    >
                        Get Started
                    </a>
                    <a
                        className="hero-content__button hero-content__button_demo"
                        href="https://google.com"
                    >
                        <i class="fa-solid fa-circle-play"></i>Watch Demo
                    </a>
                </div>
            </div>
        </>
    );
}
