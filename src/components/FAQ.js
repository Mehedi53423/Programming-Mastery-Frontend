import React from "react";
import Questions from "../assets/Questions.gif";
import { Accordion } from "flowbite-react";

const FAQ = () => {
  return (
    <div className="container mx-auto md:mt-36 mt-10">
      <div className="flex justify-center">
        <div className="md:w-1/2 flex justify-center items-center">
          <img src={Questions} alt="Questions" />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-center font-bold text-3xl mb-10">
            Frequently Asked Questions
          </h1>
          <Accordion alwaysOpen={true} flush={true}>
            <Accordion.Panel>
              <Accordion.Title>First Question?</Accordion.Title>
              <Accordion.Content>
                <p>1</p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Second Question?</Accordion.Title>
              <Accordion.Content>
                <p>2</p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Third Question?</Accordion.Title>
              <Accordion.Content>
                <p>3</p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
