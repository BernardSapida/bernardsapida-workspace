export type QueryResolvers = {
  [key: string]: (parent: any, args: any, context: any, info: any) => any;
};

export type MutationResolvers = {
  [key: string]: (parent: any, args: any, context: any, info: any) => any;
};
