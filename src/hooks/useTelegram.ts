declare const window: any;

const tg = window.Telegram.WebApp;

export default function useTelegram() {
	return {
		tg,
		user: tg.initDataUnsafe?.user,
		queryId: tg.initDataUnsage?.query_id,
		initData: tg.initData,
	};
}
