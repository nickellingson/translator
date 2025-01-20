const API_KEY = import.meta.env.VITE_OPENAI_KEY

import OpenAI from "openai"

const openai = new OpenAI({
    organization: "org-0ImkuLglKpAkeohnWIUHHNuf",
    project: "proj_V5eSr8Zpx3uCRwSOaLEq8HZH",
    apiKey: `${API_KEY}`,
    dangerouslyAllowBrowser: true
})

export const hitOpenAi = async (query) => {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "Expert translator" },
                {
                    role: "user",
                    content: `${query}`,
                },
            ],
        });
        const data = response.choices[0].message.content
        console.log(data)
        return data
    
    } catch (error) {
        console.error('Error:', error);
    }

}
