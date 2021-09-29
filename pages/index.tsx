export default function HomePage(): JSX.Element {
	return (
		<div>
			<a href="/search/ben">/search/ben</a> ✅
			<br />
			<a href="/search/?kw=ben2">/search/?kw=ben2</a> ❌in Vercel deployments 
		</div>
	)
}