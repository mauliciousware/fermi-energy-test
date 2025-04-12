import OriginalLayout from '@theme-original/Layout';
import OrganizationSchema from '@site/src/components/SEO/OrganizationSchema';

export default function Layout(props) {
  return (
    <>
      <OrganizationSchema />
      <OriginalLayout {...props} />
    </>
  );
}
