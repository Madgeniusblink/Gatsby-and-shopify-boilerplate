import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Hero, ButtonSection, LinkSection, FormInputSection, LoadingSpinner, CardSection } from "../components/home";
import ContactForm from '../components/contact-form/contact-form.component'
import SignUp from '../components/sign-up/sign-up.component'
import SignIn from '../components/sign-in/sign-in.component'




const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Hero />
        <ButtonSection />
        <LinkSection/>
        <LoadingSpinner />
        <FormInputSection />
        <ContactForm />
        <SignUp />
        <SignIn />
        <CardSection />
    </Layout>
);

export default IndexPage;



