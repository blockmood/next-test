import type { Metadata } from 'next';
import { Button } from 'antd';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Generated by create next app',
};

async function getData() {
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();
  return (
    <h1>
      Hello, Dashboard Page!, {data.owner.subscriptions_url} <Button type="primary">hello2</Button>
    </h1>
  );
}