(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{242:function(e,t,a){"use strict";a.r(t);var r=a(17),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"supported-bips"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supported-bips"}},[e._v("#")]),e._v(" Supported BIPs")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/using-wasabi/BIPs.html#what-is-supported-today"}},[e._v("What is supported today")])],1)]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("Wasabi Wallet strives toward establishing solid industry best practices and standards.\nHere is a list of all the supported and integrated Bitcoin Improvement Proposals:")]),e._v(" "),a("h2",{attrs:{id:"what-is-supported-today"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-supported-today"}},[e._v("#")]),e._v(" What is supported today")]),e._v(" "),a("details",{attrs:{id:"bip-21-uri-scheme"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#bip-21-uri-scheme","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("BIP 21: URI Scheme")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP 21: URI Scheme"),a("OutboundLink")],1)])]),a("details",{attrs:{id:"bip-32-hierarchical-deterministic-wallets"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#bip-32-hierarchical-deterministic-wallets","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("BIP 32: Hierarchical Deterministic Wallets")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP 32: Hierarchical Deterministic Wallets"),a("OutboundLink")],1)])]),a("details",{attrs:{id:"bip-38-password-protected-private-key"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#bip-38-password-protected-private-key","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("BIP 38: Password-Protected Private Key")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0038.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP 38: Password-Protected Private Key"),a("OutboundLink")],1)])]),a("details",{attrs:{id:"bip-39-mnemonic-code-for-generating-deterministic-keys"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#bip-39-mnemonic-code-for-generating-deterministic-keys","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("BIP 39: Mnemonic Code for Generating Deterministic Keys")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP 39: Mnemonic Code for Generating Deterministic Keys"),a("OutboundLink")],1)])]),a("details",{attrs:{id:"bip-44-multi-account-hierarchy-for-deterministic-wallets"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#bip-44-multi-account-hierarchy-for-deterministic-wallets","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("BIP 44: Multi-Account Hierarchy for Deterministic Wallets")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP 44: Multi-Account Hierarchy for Deterministic Wallets"),a("OutboundLink")],1)])]),a("details",{attrs:{id:"bip-72-bitcoin-uri-extensions-for-payment-protocol"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#bip-72-bitcoin-uri-extensions-for-payment-protocol","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("BIP 72: bitcoin: uri extensions for Payment Protocol")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0072.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP 72: bitcoin: uri extensions for Payment Protocol"),a("OutboundLink")],1)])]),a("details",{attrs:{id:"bip-84-derivation-scheme-for-p2wpkh-based-accounts"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#bip-84-derivation-scheme-for-p2wpkh-based-accounts","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("BIP 84: Derivation scheme for P2WPKH Based Accounts")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0084.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP 84"),a("OutboundLink")],1),e._v(" defines a standard derivation scheme for hierarchical deterministic wallets BIP 32, specifically for segregated witness P2WPKH "),a("RouterLink",{attrs:{to:"/using-wasabi/BIPs.html#bip-173-base32-address-format-for-native-v0-16-witness-outputs"}},[e._v("BIP 173")]),e._v(".\nThis allows to generate one root master seed that can derive a tree of public keys with different paths "),a("RouterLink",{attrs:{to:"/using-wasabi/BIPs.html#bip-44-multi-account-hierarchy-for-deterministic-wallets"}},[e._v("BIP 44")]),e._v(".\n"),a("code",[e._v("m / purpose' / coin_type' / account' / change / address_index")]),e._v(".\nWasabi specifically uses this standard "),a("code",[e._v("m/84'/0'/0'")]),e._v(".\nOn the TestNet and on the RegTest Wasabi deviates from the standard and uses "),a("code",[e._v("m/84'/0'/0'")]),e._v(" instead of "),a("code",[e._v("m/84'/1'/0'")]),e._v(".")],1)]),a("details",{attrs:{id:"bip-125-opt-in-full-replace-by-fee-signaling"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#bip-125-opt-in-full-replace-by-fee-signaling","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("BIP 125: Opt-In full Replace-by-Fee Signaling")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0125.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP 125: Opt-In full Replace-by-Fee Signaling"),a("OutboundLink")],1),e._v(" is activated for a subset of transactions chosen randomly, so to decrease wallet fingerprinting.")])]),a("details",{attrs:{id:"bip-141-segregated-witness-consensus-layer"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#bip-141-segregated-witness-consensus-layer","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("BIP 141: Segregated Witness (Consensus Layer)")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0141.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP 141: Segregated Witness (Consensus Layer)"),a("OutboundLink")],1)])]),a("details",{attrs:{id:"bip-143-transaction-signature-verification-for-version-0-witness-program"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#bip-143-transaction-signature-verification-for-version-0-witness-program","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("BIP 143: Transaction Signature Verification for Version 0 Witness Program")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0143.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP 143: Transaction Signature Verification for Version 0 Witness Program"),a("OutboundLink")],1)])]),a("details",{attrs:{id:"bip-144-segregated-witness-peer-services"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#bip-144-segregated-witness-peer-services","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("BIP 144: Segregated Witness (Peer Services)")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0144.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP 144: Segregated Witness (Peer Services)"),a("OutboundLink")],1)])]),a("details",{attrs:{id:"bip-158-compact-block-filters-for-light-clients"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#bip-158-compact-block-filters-for-light-clients","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("BIP 158: Compact Block Filters for Light Clients")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0158.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP 158 Block filters"),a("OutboundLink")],1),e._v(" are the reverse of "),a("RouterLink",{attrs:{to:"/using-wasabi/BIPs.html#bip-37-connection-bloom-filters"}},[e._v("BIP 37 Bloom filters")]),e._v(' - the client will connect to a Bitcoin node and say "Hey, for every block, I would like a condensed list of addresses that were affected."\nWhat would happen next is that a Bitcoin node would give the same filter that it gives to every client, because the client has thus far revealed nothing!\nOnce a block filter has come in and the client believes that there is a transaction that affects the client, the client pings a single random node for a single full block.\nIt then parses the block, and finds the transaction.\nThis has been proven to be by far the best way to do light clients privately, and is the way Wasabi works today.')],1)]),a("details",{attrs:{id:"bip-173-base32-address-format-for-native-v0-16-witness-outputs"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#bip-173-base32-address-format-for-native-v0-16-witness-outputs","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("BIP 173: Base32 address format for native v0-16 witness outputs")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP 173: Base32 address format for native v0-16 witness outputs"),a("OutboundLink")],1)])]),a("details",{attrs:{id:"bip-174-partially-signed-bitcoin-transaction-format"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#bip-174-partially-signed-bitcoin-transaction-format","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("BIP 174: Partially Signed Bitcoin Transaction Format")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("BIP 174: Partially Signed Bitcoin Transaction Format"),a("OutboundLink")],1)])]),a("details",{attrs:{id:"hardware-wallet-interface"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#hardware-wallet-interface","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("h4",[e._v("Hardware Wallet Interface")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/bitcoin-core/HWI",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hardware Wallet Interface"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=i.exports}}]);