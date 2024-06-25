import Replicate from "replicate";
import dotenv from "dotenv";
import downloadFile from "./utils.js";
dotenv.config();

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
  userAgent: "https://www.npmjs.com/package/create-replicate",
});
const model =
  "stability-ai/sdxl:7762fd07cf82c948538e41f63f77d685e02b063e37e496e96eefd46c929f9bdc";
// const model = "stability-ai/stable-diffusion-3";
const input = {
  width: 768,
  height: 768,
  prompt:
    "An anime style picture of two happy software engineers. They are in Barcelona, Spain, at a technology conference and are winning a prize. cinematic, dramatic",
  refine: "expert_ensemble_refiner",
  scheduler: "K_EULER",
  lora_scale: 0.6,
  num_outputs: 1,
  guidance_scale: 7.5,
  apply_watermark: false,
  high_noise_frac: 0.8,
  negative_prompt: "",
  prompt_strength: 0.8,
  num_inference_steps: 25,
};

console.log({ model, input });
console.log("Running...");
const output = await replicate.run(model, { input });
downloadFile(output[0]);

// const output = await replicate.predictions.create({
//   model,
//   webhook: "https://hkdk.events/ca96xo5b2luo7p/replicate",
//   input,
// });
console.log("Done!", output);
