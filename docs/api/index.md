# API Reference

## Overview

Complete API reference for the project.

## Authentication

```bash
curl -H "Authorization: Bearer YOUR_TOKEN" https://api.example.com/v2/
```

## Endpoints

### GET /api/items

Returns a list of items.

**Response:**
```json
{
  "items": [
    { "id": 1, "name": "Item One" },
    { "id": 2, "name": "Item Two" }
  ],
  "total": 2
}
```

### POST /api/items

Creates a new item.

**Request:**
```json
{
  "name": "New Item",
  "description": "Item description"
}
```

**Response:**
```json
{
  "id": 3,
  "name": "New Item",
  "created": "2026-01-01T00:00:00Z"
}
```

## Error Codes

| Code | Description |
|------|-------------|
| `400` | Bad Request |
| `401` | Unauthorized |
| `404` | Not Found |
| `429` | Rate Limited |
| `500` | Server Error |

## Rate Limits

- Free tier: 100 requests/hour
- Pro tier: 10,000 requests/hour
