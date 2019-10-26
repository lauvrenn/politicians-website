import React from 'react';
import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
};

const withLayout = (Page: any) => {
  const LayoutWithProps = (props: any) => {
    return (
      <div style={layoutStyle}>
        <Header />
        <Page {...props} />
      </div>
    );
  };

  LayoutWithProps.getInitialProps = async function(ctx: any) {
    const componentProps =
      Page.getInitialProps && (await Page.getInitialProps(ctx));

    return {
      ...componentProps,
    };
  };

  return LayoutWithProps;
};

export default withLayout;
