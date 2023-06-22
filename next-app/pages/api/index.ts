import { Configuration, OpenAIApi } from 'openai'

const config = new Configuration({
  apiKey: process.env.OPENAI_API_SECRET,
})

const openai = new OpenAIApi(config)

export async function handler(req, res) {
  const completion = await openai.createCompletion({
    model: '',
    prompt: '',
    max_tokens: 150,
    temperature: 0.8,
    top_p: 1.0,
    frequency_penalty: 0.5,
    presence_penalty: 0.0,
  })
  res.status(200).json({
    result: completion.data.choices[0].text,
  })
}

// Topics will need to keep track of number of occurences in text.
interface ITopics {
  [key: string]: number
}

function resourcesPrompt(topics: ITopics) {
  // Sort by number of occurences
  // Ask the model to prioritize by num of occur
  // Ask the model to summarize the article:
  // What is the article about?
  // What is the purpose of the article?
}
