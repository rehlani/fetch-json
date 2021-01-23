
export async function Post<T = any>(url: string, data: any = null, options = {}) {
  const resp = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
    ...options
  });

  const json = await resp.json();

  return json as T;
}

export async function Put<T = any>(url: string, data: any = null, options = {}) {
  const resp = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
    ...options
  });

  const json = await resp.json();

  return json as T
}

export async function Get<T = any>(url: string, options = {}) {
  const resp = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options
  });
  
  return await resp.json() as T
}

export async function Delete<T = any>(url: string, options = {}) {
  const resp = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options
  });

  return await resp.json() as T
}


export default {
  Get,
  Post,
  Put,
  Delete
}