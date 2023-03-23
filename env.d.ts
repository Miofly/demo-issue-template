/// <reference types="vite/client" />

interface BeforeInstallPromptEvent extends Event {
	readonly platforms: string[];
	readonly userChoice: Promise<{
		outcome: 'accepted' | 'dismissed';
		platform: string;
	}>;
	
	prompt (): Promise<void>;
}

declare var BlobBuilder: any;
declare var MozBlobBuilder: any;
declare var WebKitBlobBuilder: any;
declare var MSBlobBuilder: any;
