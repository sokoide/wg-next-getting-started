// Code generated by wunderctl. DO NOT EDIT.

import type { GraphQLError } from "@wundergraph/sdk/client";

export type JSONValue = string | number | boolean | JSONObject | Array<JSONValue>;

export type JSONObject = { [key: string]: JSONValue };

export interface UsersAllResponse {
	data?: UsersAllResponseData;
	errors?: GraphQLError[];
}

export interface UsersFirstResponse {
	data?: UsersFirstResponseData;
	errors?: GraphQLError[];
}

export interface UsersAllResponseData {
	user: {
		id: number;
		email: string;
		name?: string;
		posts?: {
			id: number;
			title: string;
			content?: string;
		}[];
	}[];
}

export interface UsersFirstResponseData {
	user?: {
		id: number;
		email: string;
		name?: string;
		posts?: {
			id: number;
			title: string;
			content?: string;
		}[];
	};
}
