interface Paths {
  home: {
    path: string;
    frequency: string;
  };
  notFound: string;
}

export const paths: Paths = {
  home: {
    path: '/',
    frequency: 'daily'
  },
  notFound: '*'
};
