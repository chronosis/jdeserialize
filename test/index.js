const test = require('unit.js');

describe('jdeserialize', () => {
  const testData = [
    'aced0005737200044c69737469c88a154016ae6802000249000576616c75654c00046e6578747400064c4c6973743b7870000000117371007e0000000000137071007e0003',
    'ACED00057372000A53657269616C546573740552815AAC6602F602000249000776657273696F6E4C0003636F6E7400094C636F6E7461696E3B78720006706172656E740EDBD2BD85EE637A02000149000D706172656E7456657273696F6E78700000000A0000004273720007636F6E7461696EFCBBE60EFBCB60C702000149000E636F6E7461696E56657273696F6E78700000000B',
    'aced000573720025636f6c64667573696f6e2e72756e74696d652e4d656d6f727953657373696f6e53636f706500000000000000010200007872001f636f6c64667573696f6e2e72756e74696d652e53657373696f6e53636f706500000000000000010300095a000c6d4973496446726f6d55726c5a00066d49734e65774a000b6d4c6173744163636573734a00146d4d6178496e616374697665496e74657276616c4a000a6d537461727454696d654c0008636c69656e7449707400124c6a6176612f6c616e672f537472696e673b4c000a63737266546f6b656e7374000f4c6a6176612f7574696c2f4d61703b4c00086d4170704e616d6571007e00024c0010747261636b657253657373696f6e496471007e0002787000000000015f745b02b100000000002932e00000015f745a86b17400093132372e302e302e317074000a4765744c6561644170707400444765744c6561644170705f313830325f393461643031343566386138626664382d38423839343245312d313245312d314237362d33373134344230463033303042443632737200116a6176612e6c616e672e496e746567657212e2a0a4f781873802000149000576616c7565787200106a6176612e6c616e672e4e756d62657286ac951d0b94e08b020000787000000008740008736f6d65746573747400087661726961626c657400057465737432740004746869737400046366696474000431383032740005746573743374000566616c736574000973657373696f6e69647400444745544c4541444150505f313830325f393461643031343566386138626664382d38423839343245312d313245312d314237362d3337313434423046303330304244363274000875726c746f6b656e740046434649443d31383032264346544f4b454e3d393461643031343566386138626664382d38423839343245312d313245312d314237362d333731343442304630333030424436327400076366746f6b656e740034393461643031343566386138626664382d38423839343245312d313245312d314237362d3337313434423046303330304244363274000574657374317400013278',
    'aced000573720025636f6c64667573696f6e2e72756e74696d652e4d656d6f727953657373696f6e53636f706500000000000000010200007872001f636f6c64667573696f6e2e72756e74696d652e53657373696f6e53636f706500000000000000010300095a000c6d4973496446726f6d55726c5a00066d49734e65774a000b6d4c6173744163636573734a00146d4d6178496e616374697665496e74657276616c4a000a6d537461727454696d654c0008636c69656e7449707400124c6a6176612f6c616e672f537472696e673b4c000a63737266546f6b656e7374000f4c6a6176612f7574696c2f4d61703b4c00086d4170704e616d6571007e00024c0010747261636b657253657373696f6e496471007e0002787000010000015fc636f79100000000002932e00000015fc636f3107400093132372e302e302e317074000b73657373696f6e5465737474004573657373696f6e546573745f313930305f636466626132303230626530383466372d42453235374537382d313245312d314237362d33373134393330443334334635354443737200116a6176612e6c616e672e496e746567657212e2a0a4f781873802000149000576616c7565787200106a6176612e6c616e672e4e756d62657286ac951d0b94e08b020000787000000006740004636669647400043139303074000973657373696f6e696474004553455353494f4e544553545f313930305f636466626132303230626530383466372d42453235374537382d313245312d314237362d333731343933304433343346353544437400047573657273720020636f6c64667573696f6e2e72756e74696d652e53747275637457726170706572a8a39ec53d50068a0200024c00036d617071007e00034c000f737472756374436c6173734e616d6571007e00027870737200116a6176612e7574696c2e486173684d61700507dac1c31660d103000246000a6c6f6164466163746f724900097468726573686f6c6478703f4000000000000c7708000000100000000374000c5348415245444c4f47494e537372001f636f6c64667573696f6e2e72756e74696d652e4172726179577261707065720f0880e9764d84dd02000249000964696d656e73696f6e4c000976616c75654c6973747400164c6a6176612f7574696c2f436f6c6c656374696f6e3b787000000001737200136a6176612e7574696c2e41727261794c6973747881d21d99c7619d03000149000473697a657870000000037704000000037371007e00107371007e00123f4000000000000c770800000010000000027400054c4142454c74001857796f6d696e6720547279636b73202d2053616272696e61740004534b455974000f41414141414242424242434343434378740019636f6c64667573696f6e2e72756e74696d652e5374727563747371007e00107371007e00123f4000000000000c7708000000100000000271007e001c74001557796f6d696e6720547279636b73202d204a696c6c71007e001e74000f4444444444454545454546464646467871007e00207371007e00107371007e00123f4000000000000c7708000000100000000271007e001c74001657796f6d696e6720547279636b73202d204b656c6c7971007e001e74000f4747474747484848484849494949497871007e0020787400084c4153544e414d4574000a466c696e7473746f6e6574000946495253544e414d45740004467265647871007e00207400096578706f727470726f7371007e00107371007e00123f4000000000000c77080000001000000001740010494e56454e544f52594d414e414745527371007e00107371007e00123f4000000000000c7708000000100000000374000646494c5445527371007e00107371007e00123f4000000000000c7708000000100000000474000653544154555374000074000459454152740004323031357400054d4f44454c71007e00377400044d414b4574000943686576726f6c65747871007e00207400075045525041474574000235307400054649525354740001317871007e00207871007e002074000875726c746f6b656e740046434649443d31393030264346544f4b454e3d636466626132303230626530383466372d42453235374537382d313245312d314237362d333731343933304433343346353544437400076366746f6b656e740034636466626132303230626530383466372d42453235374537382d313245312d314237362d3337313439333044333433463535444378'
  ];

  const JDeserialize = require('../');
  const deserializer = new JDeserialize();
  let loadedData;

  it('load', () => {
    const MyModule = require('../');
    const myClass = new MyModule();

    test.assert(myClass instanceof JDeserialize);
  });

  it('Load Test Data Set 1', () => {
    loadedData = deserializer.read(Buffer.from(testData[0], 'hex'));
    test.assert(Array.isArray(loadedData));
  });

  it('Load Test Data Set 2', () => {
    loadedData = deserializer.read(Buffer.from(testData[1], 'hex'));
    test.assert(Array.isArray(loadedData));
  });

  it('Load Test Data Set 3', () => {
    loadedData = deserializer.read(Buffer.from(testData[2], 'hex'));
    test.assert(Array.isArray(loadedData));
  });

  it('Load Test Data Set 4', () => {
    //loadedData = deserializer.read(Buffer.from(testData[3], 'hex'));
    //test.assert(Array.isArray(loadedData));
  });
});
