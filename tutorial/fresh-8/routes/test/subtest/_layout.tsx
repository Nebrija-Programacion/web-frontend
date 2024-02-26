import { PageProps } from "$fresh/server.ts";

const Layout = (props: PageProps) => {
  const Component = props.Component;
  return (
    <div>
      <h2>Soy el sub-título de la página</h2>
      <Component />
    </div>
  );
};

export default Layout;
