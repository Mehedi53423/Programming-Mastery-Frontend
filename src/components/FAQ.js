import React from "react";
import Questions from "../assets/Questions.gif";
import { Accordion } from "flowbite-react";

const FAQ = () => {
  return (
    <div className="container mx-auto md:mt-36 mt-10">
      <div className="md:flex justify-center">
        <div className="md:w-1/2 md:flex justify-center items-center my-16 hidden">
          <img src={Questions} alt="Questions" />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-center font-bold text-3xl mb-10 font-merienda">
            Frequently Asked Questions
          </h1>
          <Accordion alwaysOpen={true} flush={true}>
            <Accordion.Panel>
              <Accordion.Title>How to create an account?</Accordion.Title>
              <Accordion.Content>
                <p className="text-justify">
                  By signing up, you can create an account.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>How to login?</Accordion.Title>
              <Accordion.Content>
                <p className="text-justify">
                  Go to login tab. Then enter your email and password.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                How to start learning programming?
              </Accordion.Title>
              <Accordion.Content>
                <p className="text-justify">
                  By purchasing our pro subscription, you can start learning
                  programming.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>How to download course outline?</Accordion.Title>
              <Accordion.Content>
                <p className="text-justify">
                  In any course details, there is a download button at the
                  bottom of the page. By clicking the download button, you can
                  download the course outline.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
