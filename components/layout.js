import Head from "next/head";
import Header from "./Header";
import Search from "./Search";

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta name="keywords" content={props.keywords} />
        <meta name="description" content={props.description} />
      </Head>
      <Header />
      <Search />
      <main
        className="container mx-auto md:lg py-7"
        style={{ width: "1200px" }}
      >
        {props.children}
      </main>
    </div>
  );
};

Layout.defaultProps = {
  title: "Welcome to DevSpace",
  keywords: "Welcome to coding world",
  description: "The best info and news",
};

export default Layout;
