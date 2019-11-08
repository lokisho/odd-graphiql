const { graphqlLambda, graphiqlLambda } = require('apollo-server-lambda');
import { makeExecutableSchema } from 'graphql-tools';
import schema from './src/grahql/schema.graphql';
import { resolvers } from './resolvers';
import { GraphQLSchema } from 'graphql';
import {
  APIGatewayProxyEvent,
  Context,
  APIGatewayProxyHandler,
} from 'aws-lambda';
const myGraphQLSchema: GraphQLSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers,
});

module.exports.hello = async (event: object): Promise<object> => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

exports.graphqlHandler = function graphqlHandler(
  event: APIGatewayProxyEvent,
  context: Context,
  callback: Function
): APIGatewayProxyHandler {
  function callbackWithHeaders(error, output) {
    // eslint-disable-next-line no-param-reassign
    output.headers['Access-Control-Allow-Origin'] = '*';
    callback(error, output);
  }

  const handler = graphqlLambda({ schema: myGraphQLSchema });
  return handler(event, context, callbackWithHeaders);
};
