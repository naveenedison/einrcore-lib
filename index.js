'use strict';

var einrcore = module.exports;

// module information
einrcore.version = 'v' + require('./package.json').version;
einrcore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of einrcore-lib found. ' +
      'Please make sure to require einrcore-lib and check that submodules do' +
      ' not also include their own einrcore-lib dependency.';
    throw new Error(message);
  }
};
einrcore.versionGuard(global._einrcore);
global._einrcore = einrcore.version;

// crypto
einrcore.crypto = {};
einrcore.crypto.BN = require('./lib/crypto/bn');
einrcore.crypto.ECDSA = require('./lib/crypto/ecdsa');
einrcore.crypto.Hash = require('./lib/crypto/hash');
einrcore.crypto.Random = require('./lib/crypto/random');
einrcore.crypto.Point = require('./lib/crypto/point');
einrcore.crypto.Signature = require('./lib/crypto/signature');

// encoding
einrcore.encoding = {};
einrcore.encoding.Base58 = require('./lib/encoding/base58');
einrcore.encoding.Base58Check = require('./lib/encoding/base58check');
einrcore.encoding.BufferReader = require('./lib/encoding/bufferreader');
einrcore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
einrcore.encoding.Varint = require('./lib/encoding/varint');

// utilities
einrcore.util = {};
einrcore.util.buffer = require('./lib/util/buffer');
einrcore.util.js = require('./lib/util/js');
einrcore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
einrcore.errors = require('./lib/errors');

// main bitcoin library
einrcore.Address = require('./lib/address');
einrcore.Block = require('./lib/block');
einrcore.MerkleBlock = require('./lib/block/merkleblock');
einrcore.BlockHeader = require('./lib/block/blockheader');
einrcore.HDPrivateKey = require('./lib/hdprivatekey.js');
einrcore.HDPublicKey = require('./lib/hdpublickey.js');
einrcore.Networks = require('./lib/networks');
einrcore.Opcode = require('./lib/opcode');
einrcore.PrivateKey = require('./lib/privatekey');
einrcore.PublicKey = require('./lib/publickey');
einrcore.Script = require('./lib/script');
einrcore.Transaction = require('./lib/transaction');
einrcore.URI = require('./lib/uri');
einrcore.Unit = require('./lib/unit');

// dependencies, subject to change
einrcore.deps = {};
einrcore.deps.bnjs = require('bn.js');
einrcore.deps.bs58 = require('bs58');
einrcore.deps.Buffer = Buffer;
einrcore.deps.elliptic = require('elliptic');
einrcore.deps.scryptsy = require('scryptsy');
einrcore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
einrcore.Transaction.sighash = require('./lib/transaction/sighash');
