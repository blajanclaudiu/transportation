import { runChatServiceTests } from '#chat/chatService.test';
import { InMemoryChatService } from '#modules/memory/inMemoryChatService';

describe('InMemoryChatService', () => {
	runChatServiceTests(
		() => new InMemoryChatService(),
		() => {},
	);
});
