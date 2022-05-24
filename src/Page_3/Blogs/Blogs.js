import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-20'>
            {/* qu-1 */}
            <div className="">
                <h1 className='text-2xl text-center text-red-900 font-bold'>QU.1: How will you improve the performance of a React Application?</h1>
                <h2 className='text-3xl text-center text-green-900 font-bold'>Ans to the qu. no.-1</h2>
                <h1 className='text-xl text-black-900'><span className='text-2xl text-red-800'>01. </span>Keeping component state local where necessary.</h1>
                <p className='text-xl text-black-900'><span className='text-2xl text-red-800'>02. </span>Windowing or list virtualization in React.</p>
                <p className='text-xl text-black-900'><span className='text-2xl text-red-800'>03. </span>Always render hidden components like Modals and Dropdowns conditionally.</p>
                <p className='text-xl text-black-900'><span className='text-2xl text-red-800'>04. </span>Virtual DOM is used in React.js to increase performance.</p>
                <p className='text-xl text-black-900'><span className='text-2xl text-red-800'>05. </span>Avoid inline functions as much as possible</p>
                <p className='text-xl text-black-900'><span className='text-2xl text-red-800'>06. </span>Always call multiple APIs parallelly.</p>
            </div>

        {/* qu-2 */}
            <div className="mt-4">
            <h1 className='text-2xl text-center text-red-900 font-bold'>QU.2: What are the different ways to manage a state in a React application?</h1>
                <h2 className='text-3xl text-center text-green-900 font-bold'>Ans to the qu. no.-2</h2>
                <h1 className='text-xl text-black-900'><span className='text-2xl text-red-800'>01. </span>Local state :  Local state is data we manage in one or another component..</h1>
                <p className='text-xl text-black-900'><span className='text-2xl text-red-800'>02. </span>Conclusion :You need to map out identifiers, build hierarchical trees, understand a particular model to sort and identify information in a React app easily. </p>
                <p className='text-xl text-black-900'><span className='text-2xl text-red-800'>03. </span>Global state :  Global state is data we manage across multiple components.</p>
                <p className='text-xl text-black-900'><span className='text-2xl text-red-800'>04. </span>Server state :  Data that comes from an external server that must be integrated with our UI state.</p>
                <p className='text-xl text-black-900'><span className='text-2xl text-red-800'>05. </span>Session State : Session state contains information about the user of the application such as user id, permissions, passwords, etc</p>
                <p className='text-xl text-black-900'><span className='text-2xl text-red-800'>06. </span> Data state : Data state covers information that your React application stores temporarily for various business functions.</p>
            </div>

        {/* qu-3 */}

            <div className="mt-4">
            <h1 className='text-2xl text-center text-red-900 font-bold'>QU.3: How does prototypical inheritance work?</h1>
                <h2 className='text-3xl text-center text-green-900 font-bold'>Ans to the qu. no.-3</h2>
                <h1 className='text-xl text-black-900'><span className='text-2xl text-red-800'>01. </span>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects.</h1>
                <p className='text-xl text-black-900'><span className='text-2xl text-red-800'>02. </span>It is a method by which an object can inherit the properties and methods of another object. </p>
                <p className='text-xl text-black-900'><span className='text-2xl text-red-800'>03. </span>Prototype-based programming is a style of object-oriented programming in which behaviour reuse (known as inheritance) is performed via a process of reusing existing objects that serve as prototypes.</p>
                <p className='text-xl text-black-900'><span className='text-2xl text-red-800'>04. </span>Understanding prototypal inheritance is the key to understanding how objects inherit properties in JavaScript.</p>
                <p className='text-xl text-black-900'><span className='text-2xl text-red-800'>05. </span>All functions have a prototype, which all objects you create using that function will inherit all properties and methods from.</p>
                <p className='text-xl text-black-900'><span className='text-2xl text-red-800'>06. </span> All JavaScript objects inherit properties and methods from a prototype: Date objects inherit from Date. </p>
            </div>

{/* qu-5 */}


<div className="mt-4">
            <h1 className='text-2xl text-center text-red-900 font-bold'>QU.5:  You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                <h2 className='text-3xl text-center text-green-900 font-bold'>Ans to the qu. no.-5</h2>
                <h1 className='text-xl text-black-900'><span className='text-2xl text-red-800'>01. </span></h1>
                <p className='text-xl text-black-900'><span className='text-2xl text-red-800'>02. </span> </p>
                <p className='text-xl text-black-900'><span className='text-2xl text-red-800'>03. </span></p>
                <p className='text-xl text-black-900'><span className='text-2xl text-red-800'>04. </span></p>
                <p className='text-xl text-black-900'><span className='text-2xl text-red-800'>05. </span></p>
                <p className='text-xl text-black-900'><span className='text-2xl text-red-800'>06. </span> </p>
            </div>


{/* qw-6 */}
            <div className="mt-4">
            <h1 className='text-2xl text-center text-red-900 font-bold'>QU.6:What is a unit test? Why should write unit tests?</h1>
                <h2 className='text-3xl text-center text-green-900 font-bold'>Ans to the qu. no.-6</h2>
                <h1 className='text-xl text-black-900'><span className='text-2xl text-red-800'>01. </span>Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended.</h1>
                <p className='text-xl text-black-900'><span className='text-2xl text-red-800'>02. </span>Unit testing ensures that all code meets quality standards before it's deployed </p>
                <p className='text-xl text-black-900'><span className='text-2xl text-red-800'>03. </span> Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.</p>
                <p className='text-xl text-black-900'><span className='text-2xl text-red-800'>04. </span>For Test-Driven Development (TDD), you write unit tests before writing any implementation</p>
                <p className='text-xl text-black-900'><span className='text-2xl text-red-800'>05. </span>Tests make you better at managing your pull requests (PRs).</p>
                <p className='text-xl text-black-900'><span className='text-2xl text-red-800'>06. </span>5 Tips to Outshine your peers as an SDE in Industry. </p>
                <p className='text-xl text-black-900'><span className='text-2xl text-red-800'>07. </span>Tests make you a better software engineer. ... </p>
            </div>





        </div>
    );
};

export default Blogs;