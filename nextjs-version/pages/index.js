import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [accountInfo, setAccountInfo] = useState(null);

  async function getAccount() {
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    const account = accounts[0];
    console.log("account:", account);
    setAccountInfo(account);
  }

  return (
    <div className="container">
      <Head>
        <title>Metamask Login</title>
        <link rel="icon" href="/MetaMask_Fox.svg" />
      </Head>

      <main className="p-6">
        <button
          className="enableEthereumButton block py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"
          onClick={getAccount}
        >
          Enable Ethereum
        </button>
        {accountInfo ? (
          <div className="inline-flex box-border p-4 mt-4 border-4 border-green-400">
            <h2>
              Account: <span className="showAccount">{accountInfo}</span>
            </h2>
          </div>
        ) : (
          <div className="inline-flex box-border p-4 mt-4 border-4 border-red-400">
            <h2>Not yet sign in</h2>
          </div>
        )}
      </main>

      <footer></footer>

      <style jsx>{``}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
