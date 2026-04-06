import { useCallback, useEffect, useState } from "react"
import { Trans } from "react-i18next"
import { VSCodeButton, VSCodeLink } from "@vscode/webview-ui-toolkit/react"

import type { ProviderSettings } from "@roo-code/types"
import { deepSeekDefaultModelId } from "@roo-code/types"

import { useExtensionState } from "@src/context/ExtensionStateContext"
import { validateApiConfiguration } from "@src/utils/validate"
import { vscode } from "@src/utils/vscode"
import { useAppTranslation } from "@src/i18n/TranslationContext"

import ApiOptions from "../settings/ApiOptions"
import { Tab, TabContent } from "../common/Tab"

import RooHero from "./RooHero"
import RooCloudCTA from "./RooCloudCTA"

const WelcomeView = () => {
	const { apiConfiguration, currentApiConfigName, setApiConfiguration, uriScheme } = useExtensionState()
	const { t } = useAppTranslation()
	const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined)
	const [fastApiResult, setFastApiResult] = useState<string | undefined>(undefined)

	const handleFastApiPost = useCallback(async () => {
		setFastApiResult("Sending request...")
		try {
			const urls = ["http://127.0.0.1:8000/items/", "http://localhost:8000/items/"]
			let response = null
			for (const url of urls) {
				try {
					response = await fetch(url, {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({
							name: "Welcome Test POST",
							description: "Created from Welcome Screen",
						}),
					})
					if (response.ok) break
				} catch (e) {
					continue
				}
			}

			if (response && response.ok) {
				const data = await response.json()
				setFastApiResult("Success: " + JSON.stringify(data))
			} else {
				setFastApiResult("Error: could not reach server")
			}
		} catch (error) {
			setFastApiResult("Error: " + String(error))
		}
	}, [])

	const setApiConfigurationFieldForApiOptions = useCallback(
		<K extends keyof ProviderSettings>(field: K, value: ProviderSettings[K]) => {
			setApiConfiguration({ [field]: value })
		},
		[setApiConfiguration],
	)

	const handleSubmit = useCallback(() => {
		const error = apiConfiguration ? validateApiConfiguration(apiConfiguration) : undefined
		if (error) {
			setErrorMessage(error)
		} else {
			setErrorMessage(undefined)
		}
		vscode.postMessage({ type: "upsertApiConfiguration", text: currentApiConfigName, apiConfiguration })
	}, [apiConfiguration, currentApiConfigName])

	useEffect(() => {
		if (!apiConfiguration?.apiProvider) {
			setApiConfiguration({ apiProvider: "deepseek", apiModelId: deepSeekDefaultModelId })
		}
	}, [apiConfiguration?.apiProvider, setApiConfiguration])

	return (
		<Tab>
			<TabContent className="flex flex-col gap-5 p-16">
				<div style={{ padding: "16px", border: "1px solid var(--vscode-sideBarSectionHeader-border)", borderRadius: "8px", marginBottom: "8px", textAlign: "center" }}>
					<div style={{ marginBottom: "12px", fontWeight: "bold", fontSize: "12px", color: "var(--vscode-descriptionForeground)" }}>
						FASTAPI INTEGRATION
					</div>
					<VSCodeButton onClick={handleFastApiPost} appearance="primary" style={{ width: "100%" }}>
						FAST API POST
					</VSCodeButton>
					{fastApiResult && (
						<div style={{ marginTop: "12px", padding: "8px", fontSize: "11px", border: "1px solid var(--vscode-panel-border)", borderRadius: "4px", textAlign: "left", wordBreak: "break-all" }}>
							{fastApiResult}
						</div>
					)}
				</div>

				<RooHero />
				<RooCloudCTA />
				<h2 className="mt-0 mb-0">{t("welcome:greeting")}</h2>

				<div className="font-bold">
					<p>
						<Trans i18nKey="welcome:introduction" />
					</p>
					<p>
						<Trans i18nKey="welcome:chooseProvider" />
					</p>
				</div>

				<div className="mb-4">
					<p className="font-bold mt-0 mb-6">{t("welcome:startCustom")}</p>
					<ApiOptions
						fromWelcomeView
						apiConfiguration={apiConfiguration || {}}
						uriScheme={uriScheme}
						setApiConfigurationField={setApiConfigurationFieldForApiOptions}
						errorMessage={errorMessage}
						setErrorMessage={setErrorMessage}
					/>
				</div>
			</TabContent>
			<div className="sticky bottom-0 bg-vscode-sideBar-background p-5">
				<div className="flex flex-col gap-1">
					<div className="flex justify-end">
						<VSCodeLink
							href="#"
							onClick={(e) => {
								e.preventDefault()
								vscode.postMessage({ type: "importSettings" })
							}}
							className="text-sm">
							{t("welcome:importSettings")}
						</VSCodeLink>
					</div>
					<VSCodeButton onClick={handleSubmit} appearance="primary">
						{t("welcome:start")}
					</VSCodeButton>
					{errorMessage && <div className="text-vscode-errorForeground">{errorMessage}</div>}
				</div>
			</div>
		</Tab>
	)
}

export default WelcomeView
