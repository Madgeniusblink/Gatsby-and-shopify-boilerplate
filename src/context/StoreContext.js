import React, { createContext } from "react";

// const isBrowser = typeof window !== "undefined";

// Shopify client (fetch)

const defaultValues = {};

export const StoreContext = createContext(defaultValues);

export const StoreProvider = ({ children }) => {
    //
    // State Management
    //

    return (
        <StoreContext.Provider
            value={{
                ...defaultValues,
            }}
        >
            {children}
        </StoreContext.Provider>
    );
};
