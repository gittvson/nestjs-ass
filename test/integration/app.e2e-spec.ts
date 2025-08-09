import { TestApp } from "../utils/test-app";
import { ApiService } from "src/api/auth/api.service";

describe("AppController (e2e)", () => {
  let testApp: TestApp;

  beforeEach(async () => {
    testApp = await TestApp.create();
  });

  afterEach(async () => {
    await testApp.close();
  });

  it("/ -> GET", () => {
    return testApp.getRequest().get("/").expect(200).expect("Hello World!");
  });

  it("should reject expired API key", async () => {
    // Manually expire the key
    const apiService = testApp.app.get(ApiService);
    const keyEntity = await apiService.findKey(testApp.apiKey);
    keyEntity.expiresAt = new Date(Date.now() - 60 * 1000); // Set to 1 min ago
    await apiService["apiRepository"].save(keyEntity);

    await testApp
      .getRequest()
      .get("/")
      .expect(403);
  });
});
