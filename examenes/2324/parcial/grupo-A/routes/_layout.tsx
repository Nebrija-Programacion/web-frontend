import { PageProps } from "$fresh/server.ts";

export default function Layout({ Component, state }: PageProps) {
  // do something with state here
  return (
    <div class="layout">
      <div class="header">
        <a href="/agendacsr">Agenda Client Side</a>
        <a href="/agendassr">Agenda Server Side</a>
      </div>
      <h1>My Agenda</h1>
      <Component />
    </div>
  );
}
