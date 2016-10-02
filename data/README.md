### Example Data

**Albums**

```js
{
	"data": [
		{
			"id": 123, // Unique integer
			"artist": "...", 
			"album": "...",
			"url": "https://...", // Ideally bandcamp URL
			"art": "https://...",
			"tags": [ // Array of genre tags
				"future-funk"
			],
			"fans": 42 // Fans on bandcamp (not currently used)
		}
	]
}
```

**Genres**

```js
{
	"data": [
		{
			"desc": "...",       // Short definition 
			"slug": "vaporwave", // URL safe name
			"name": "Vaporwave"  // Stylized name
		}
	]
}
```