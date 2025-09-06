import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({ data }: Route.MetaArgs) {
  const domain = data?.url ? new URL(data.url).host : 'Unknown';
  return [
    { title: `React Router App on ${domain}` },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function loader({ request, context }: Route.LoaderArgs) {
  return { 
    url: request.url,
    message: (context as any).cloudflare.env.VALUE_FROM_CLOUDFLARE 
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <Welcome message={loaderData.message} />;
}
