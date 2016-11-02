export const funcAddCurrentDatum = () => {
	return {
		type: 'ADD_CURRENT_DATUM',
	};
};

export const funcConvertToButton = (intTagIndex) => {
	return {
		type: 'CONVERT_TO_BUTTON',
		intTagIndex,
	};
};

export const funcConvertToInput = (intTagIndex) => {
	return {
		type: 'CONVERT_TO_INPUT',
		intTagIndex,
	};
};

export const funcUpdateFocusedTagName = (strTagName, numIndex) => {
	return {
		type: 'UPDATE_FOCUSED_TAG_NAME',
		numIndex,
		strTagName,
	};
};

export const funcUpdateFocusedTagValue = (strTagValue, numIndex) => {
	console.log(strTagValue);
	return {
		type: 'UPDATE_FOCUSED_TAG_VALUE',
		numIndex,
		strTagValue,
	}
};

export const funcCacheCurrentDatum = () => {
	return {
		type: 'CACHE_CURRENT_DATUM',
	};
};

export const funcClearCurrentDatum = () => {
	return {
		type: 'CLEAR_CURRENT_DATUM',
	};
};

export const funcEditDatum = (strId) => {
	return {
		type: 'EDIT_DATUM',
		strId,
	};
};

export const funcDeleteDatum = (strId) => {
	return {
		type: 'DELETE_DATUM',
		strId,
	};
};

export const funcSaveCurrentDatum = () => {
	return {
		type: 'SAVE_CURRENT_DATUM',
	};
};

export const funcUncacheDatum = () => {
	return {
		type: 'UNCACHE_DATUM',
	};
};
