import axios from "axios";

export default async function handler(req, res) {
    try {
        const { address } = req.query;
        if (!address) {
            return res.status(400).json({ error: "缺少地址参数" });
        }

        const apiUrl = `https://api.eclipsescan.xyz/v1/account/tokens?address=${address}`;
        const response = await axios.get(apiUrl);

        res.setHeader("Access-Control-Allow-Origin", "*");
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: "API 请求失败", details: error.message });
    }
}
