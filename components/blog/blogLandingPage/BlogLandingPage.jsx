"use client"
import React from "react";
import { PopularBlog } from "./Popular";
import RecentBlogs from "./Recents";
import FeaturedPost from "./FeturedPost";


export const BlogLandingPage = () => {
    return <section>
        <FeaturedPost />
        <PopularBlog />
        <hr className="text-gray-600" />
        <RecentBlogs />
    </section>
}

