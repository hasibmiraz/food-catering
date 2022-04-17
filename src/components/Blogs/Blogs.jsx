import React from 'react';

const Blogs = () => {
  return (
    <div className="w-full md:w-3/4 px-2 md:mx-auto">
      <h1 className="text-center text-3xl mt-5">Question & Answer</h1>
      <div className="my-5">
        <h2 className="text-lg">
          <span className="text-gray-500">Question 1:</span> Difference between
          authorization and authentication?
        </h2>
        <p className="my-4">
          <span className="text-gray-500">Answer:</span>
        </p>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Authentication
                </th>
                <th scope="col" className="px-6 py-3">
                  Authorization
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-wrap"
                >
                  Verifies the users identity.
                </th>
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-wrap">
                  Permits users to different resources.
                </td>
              </tr>
              <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-wrap"
                >
                  Visible by the user.
                </th>
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-wrap">
                  Not Visible By the user
                </td>
              </tr>
              <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-wrap"
                >
                  User provide the authentication informtaion.
                </th>
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-wrap">
                  Security staff maintain the access control of the user.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <hr />
      <div className="my-5">
        <h2 className="text-lg">
          <span className="text-gray-500">Question 2:</span> Why are you using
          firebase? What other options do you have to implement authentication?
        </h2>
        <p className="my-4">
          <span className="text-gray-500">Answer:</span> Firebase is mainly used
          for authentication or for login and signup purpose. It helps us to use
          3rd party login facility. There are many alternatives of firebase.
          Such as:
        </p>
        <ul className="list-disc list-inside dark:text-gray-400 mt-3 ml-5">
          <li>Passport</li>
          <li>Amazon Cognito</li>
          <li>Auth0</li>
          <li>Octa</li>
        </ul>
      </div>
      <hr />
      <div className="my-5">
        <h2 className="text-lg">
          <span className="text-gray-500">Question 3:</span> What other services
          does firebase provide other than authentication?
        </h2>
        <p className="my-4">
          <span className="text-gray-500">Answer:</span> Firebase provides the
          following services other than authentication. Such as:
        </p>
        <ul className="list-decimal list-inside dark:text-gray-400 mt-3 ml-5">
          <li>Google Analytics</li>
          <li>Cloud Function</li>
          <li>Realtime Database</li>
          <li>Analytics</li>
          <li>Predictions</li>
          <li>A/B Testing</li>
          <li>Cloud Messaging</li>
        </ul>
      </div>
    </div>
  );
};

export default Blogs;
