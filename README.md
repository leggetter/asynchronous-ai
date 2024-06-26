# Asynchronous APIs with Hookdeck

There are many use cases where we're not trying to build real-time ChatGPT-like experiences, so the underlying technology should support asynchronous mechanisms such as callback to enable applications to work more efficiently. 

Examples include:

- Processing or generating large text documents, images, or video.
- Batch processing inputs.
- Piping the output from an AI process to another service with no synchronous response required.

In these situations, you don't want to hold a connection open to an API and await a response. Instead, you want to receive a callback when the process has completed.

All of these scenarios represent the need to manage asynchronous messaging.

## AI platforms with Asynchronous AI support

- [Replicate](https://replicate.com/docs/webhooks?ref=github-asynchronous-ai): webhook callbacks for persisting prediction data and files, sending notifications when long-running predictions finish, and creating model pipelines.
- [AssemblyAI](https://www.assemblyai.com/docs/getting-started/webhooks?ref=github-asynchronous-ai): get notified when your transcripts are ready.
- [Deepgram](https://developers.deepgram.com/docs/using-callbacks-to-return-transcripts-to-your-server#what-is-a-webhook?ref=github-asynchronous-ai): return transcripts to a callback URL sent to Deepgram's API.

## AI adjacent platforms that enable Asynchronous AI

- [Hookdeck](https://hookdeck.com?ref=github-asynchronous-ai) is an event gateway platform that supports ingesting events from platforms, localhost development, and routing events to other services.
- [Resend](https://resend.com/docs/dashboard/webhooks/introduction?ref=github-asynchronous-ai): Email API that developers love offering webhook callbacks for various email events.
- Twilio
  - [Programmable SMS](https://www.twilio.com/docs/usage/webhooks/messaging-webhooks?ref=github-asynchronous-ai): Webhooks for inbound SMS. Note that to support asynchronous workflows, you'll need to follow the "Messaging without responding" workflow.
  - [Programmable Voice](https://www.twilio.com/docs/usage/webhooks/voice-webhooks?ref=github-asynchronous-ai): notifications about call status progress and trigger call workflows via webhook callbacks.

## Examples

### Replicate & Resend

Generate images with Replicate](https://replicate.com), receive the images on localhost, and in parallel send an email with an image with [Resend](https://resend.com).

➡️ [Replicate & Resend example](examples/replicate-resend/)
