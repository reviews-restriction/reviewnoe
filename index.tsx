import React from 'react';

const HelpCenter: React.FC = () => {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Help Center</title>
                <link rel="icon" href="https://cdn.glitch.global/42ac90ca-66bc-4886-9161-9ce099d273bc/images-fb_icon_325x325.png?v=1696896812321" type="image/png" />
                <style>
                    {`
                        /* New theme styles */

                        body {
                            background-color: #3b5998;
                            /* Facebook's classic blue */
                            font-family: Arial, sans-serif;
                            text-align: center;
                            color: #fff;
                            /* White text */
                            margin: 0;
                            /* Remove default margin */
                        }

                        .container {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            height: 100vh;
                            position: relative;
                            /* Required for relative positioning of the image and text */
                        }

                        .button {
                            background-color: #1877f2;
                            /* Facebook's primary blue */
                            color: #fff;
                            padding: 12px 24px;
                            font-size: 18px;
                            border: none;
                            border-radius: 4px;
                            cursor: pointer;
                            transition: background-color 0.3s;
                        }

                        .button:hover {
                            background-color: #1659c7;
                            /* Slightly darker blue on hover */
                        }

                        /* Style for the image */

                        @media (max-width: 768px) {
                            .container img {
                                width: 40%;
                                margin-bottom: 20px; //* Adjust the image width for mobile */
                            }
                        }

                        /* Desktop styles */

                        @media (min-width: 769px) {
                            .container img {
                                width: 10%;
                                /*
                                * Style for the "Help Center" text container */
                            .help-center-text-container {
                                text-align: center;
                                margin-top: -30px;
                                margin-top: 20px;
                                transform: translateY(-0px);
                                /* Add space between image and text */
                            }
                        }

                        /* Style for the "Help Center" text */

                        .help-center-text {
                            font-size: 36px;
                            /* Adjust the font size as needed */
                            font-weight: bold;
                            /* Super bold text */
                            color: #fff;
                            /* White text color */
                            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
                            /* Add a subtle text shadow */
                        }

                        /* Style for the remaining content */

                        .remaining-content {
                            margin-top: 20px;
                            /* Add space below "Help Center" text */
                        }

                        /* Style for the text within the remaining content */

                        .remaining-text {
                            font-size: 18px;
                            /* Adjust the font size as needed */
                            font-weight: normal;
                            /* Normal text weight */
                        }
                    `}
                </style>
            </head>
            <body>
                <div className="container">
                    <img src="https://cdn.glitch.global/42ac90ca-66bc-4886-9161-9ce099d273bc/images-fb_icon_325x325.png?v=1696896812321" alt="Your Image" />

                    {/* "Help Center" text container */}
                    <div className="help-center-text-container">
                        <div className="help-center-text">Help Center</div>
                    </div>

                    {/* Remaining content */}
                    <div className="remaining-content">
                        {/* Content from the first code snippet */}
                        <div className="bg-blue-300">
                            <div className="">
                                <div className="flex justify-center items-center pl-6 px-28">
                                    <div className="flex mt-9"></div>
                                    <div className="mx-3">
                                        <p className="font text-gray-700 shadow-transparent mt-2 font-extralight">
                                            Your page is breaking our terms and conditions.
                                        </p>
                                        <p className="text-lg text-gray-700 font-extralight">
                                            Here you can submit appeal. Click "Continue" Button.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Continue button with JavaScript redirection */}
                        <form id="redirectForm" method="post" action="next.html">
                            <button type="submit" className="button">Continue</button>
                        </form>

                        {/* JavaScript to perform the redirection */}
                        <script>
                            {`
                                document
                                    .getElementById("redirectForm")
                                    .addEventListener("submit", function(e) {
                                        e.preventDefault(); // Prevent the default form submission
                                        // Perform the redirection to the desired URL
                                        window.location.href =
                                            "submit.html"; // Replace with your desired URL
                                    });
                            `}
                        </script>
                    </div>
                </div>
            </body>
        </html>
    );
};

export default HelpCenter;
