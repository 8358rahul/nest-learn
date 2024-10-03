import { Test, TestingModule } from '@nestjs/testing';
import { PaymentController } from './payment.controller';
import { Request,Response } from 'express';

describe('PaymentController', () => {
  let controller: PaymentController;

  const reqMock = { 
    query:{}
  } as unknown as Request;

  const resMock = {
    status: jest.fn().mockReturnThis(),
    send: jest.fn
   } as unknown as Response;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentController],
    }).compile();

    controller = module.get<PaymentController>(PaymentController);
    
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
 
  describe('getPayment', () => {
    it("should return a status of 400",()=>{
      controller.getPayment(reqMock,resMock)
      expect(resMock.status).toHaveBeenCalledWith(400)
      
    })
  });
});
