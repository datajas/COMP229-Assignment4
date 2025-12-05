import assert from "node:assert/strict";
import test from "node:test";
import { handleError, notFound } from "./responses.js";

const createMockRes = () => {
  return {
    statusCode: null,
    body: null,
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      this.body = payload;
      return this;
    }
  };
};

test("notFound sets a 404 with the entity name", () => {
  const res = createMockRes();

  const result = notFound(res, "Contact");

  assert.equal(res.statusCode, 404);
  assert.deepEqual(res.body, { message: "Contact not found" });
  assert.equal(result, res);
});

test("handleError sends a 500 with the provided message", () => {
  const res = createMockRes();
  const error = new Error("Unexpected failure");

  const result = handleError(res, error);

  assert.equal(res.statusCode, 500);
  assert.deepEqual(res.body, { message: "Unexpected failure" });
  assert.equal(result, res);
});

test("handleError falls back to a generic message when missing", () => {
  const res = createMockRes();

  const result = handleError(res, {});

  assert.equal(res.statusCode, 500);
  assert.deepEqual(res.body, { message: "Server error" });
  assert.equal(result, res);
});