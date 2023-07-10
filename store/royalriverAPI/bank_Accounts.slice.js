import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_bank_account_list = createAsyncThunk(
  "bank_Accounts/api_v1_bank_account_list",
  async payload => {
    const response = await apiService.api_v1_bank_account_list(payload)
    return response.data
  }
)
export const api_v1_bank_account_create = createAsyncThunk(
  "bank_Accounts/api_v1_bank_account_create",
  async payload => {
    const response = await apiService.api_v1_bank_account_create(payload)
    return response.data
  }
)
export const api_v1_bank_account_retrieve = createAsyncThunk(
  "bank_Accounts/api_v1_bank_account_retrieve",
  async payload => {
    const response = await apiService.api_v1_bank_account_retrieve(payload)
    return response.data
  }
)
export const api_v1_bank_account_update = createAsyncThunk(
  "bank_Accounts/api_v1_bank_account_update",
  async payload => {
    const response = await apiService.api_v1_bank_account_update(payload)
    return response.data
  }
)
export const api_v1_bank_account_partial_update = createAsyncThunk(
  "bank_Accounts/api_v1_bank_account_partial_update",
  async payload => {
    const response = await apiService.api_v1_bank_account_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_bank_account_destroy = createAsyncThunk(
  "bank_Accounts/api_v1_bank_account_destroy",
  async payload => {
    const response = await apiService.api_v1_bank_account_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const bank_AccountsSlice = createSlice({
  name: "bank_Accounts",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_bank_account_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_bank_account_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_bank_account_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_bank_account_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_bank_account_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_bank_account_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_bank_account_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_bank_account_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_bank_account_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_bank_account_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_bank_account_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_bank_account_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_bank_account_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_bank_account_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_bank_account_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_bank_account_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_bank_account_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_bank_account_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_bank_account_list,
  api_v1_bank_account_create,
  api_v1_bank_account_retrieve,
  api_v1_bank_account_update,
  api_v1_bank_account_partial_update,
  api_v1_bank_account_destroy,
  slice: bank_AccountsSlice
}
