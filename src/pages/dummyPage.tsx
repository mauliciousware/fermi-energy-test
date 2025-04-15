import React from 'react';
import Layout from '@theme/Layout';

export default function DummyPage() {
  return (
    <Layout title="Placeholder Page" description="This is a placeholder page.">
      <main className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-4">Placeholder Page</h1>
        <p className="text-lg mb-4">
          This page is under construction. Please check back later.
        </p>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
      </main>
    </Layout>
  );
} 