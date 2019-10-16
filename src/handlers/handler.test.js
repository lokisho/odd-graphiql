const { hello } = require('./handler');

describe('Handler', () => {
  it('can say hello', async () => {
    expect(await hello()).toEqual({
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Go Serverless v1.0! Your function executed successfully!',
        },
        null,
        2
      ),
    });
  });
});
