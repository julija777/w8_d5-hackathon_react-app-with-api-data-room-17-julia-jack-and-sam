import "./Layout.css";

function Layout({ title, children }) {
  return (
    <div class="container">
      <main class="page">
        <h1>{title}</h1>
        {children}
      </main>
    </div>
  );
}

export default Layout;
