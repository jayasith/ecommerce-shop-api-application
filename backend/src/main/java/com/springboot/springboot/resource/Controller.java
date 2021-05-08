package com.springboot.springboot.resource;

import com.springboot.springboot.model.*;
import com.springboot.springboot.repository.*;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/rest")
public class Controller {

    @Autowired
    private orderRepository orderRepo;
    @Autowired
    private sellerRepository sellerRepo;
    @Autowired
    private buyerRepository buyerRepo;
    @Autowired
    private productRepository productRepo;


    @PostMapping("/sellers")
    public String SellerRegister(@RequestBody Seller seller){
        sellerRepo.save(seller);
        return "id :"+seller.getId()+"added";
    }

    @PostMapping("/buyers")
    public String BuyerRegister(@RequestBody Buyer buyer){
        buyerRepo.save(buyer);
        return "id :"+buyer.getId()+"added";
    }

    @PostMapping("/sellerlog")
    public String Sellerlogin(@RequestBody Seller s){
        Seller seller = sellerRepo.findByUsername(s.getUsername());

        if(seller!=null) {
            if (seller.getPassword().equals(s.getPassword())) {
                return seller.getId();
            } else {
                return "incorrect";
            }
        }
        return "username doesn't exist";
    }

    @PostMapping("/buyerlog")
    public String Buyerlogin(@RequestBody Buyer b){
        Buyer buyer = buyerRepo.findByUsername(b.getUsername());
        if(buyer!=null){
            if(buyer.getPassword().equals(b.getPassword())){
                return buyer.getId();
            }else{
                return "incorrect";
            }
        }
        return "username doesn't exist";
    }

    @GetMapping("/products")
    public List<Product> getAllProducts(){
        return productRepo.findAll();
    }

    @PostMapping("/products")
    public String addProduct(@RequestBody Product product){
        productRepo.save(product);

        return "id :"+product.getId()+" added";
    }

    @GetMapping("/sellerproducts/{id}")
    public List<Product> getSellerProduct(@PathVariable String id){
        return productRepo.findBySellerId(id);
    }

    @PostMapping("/sellerproducts")
    public String updateProduct(@RequestBody Product product){
        productRepo.insert(product);

        return  "product update";
    }

    @DeleteMapping("/sellerproducts/{id}")
    public String deleteProduct(@PathVariable String id){
        productRepo.deleteById(id);
        return "product deleted";
    }

    @PostMapping("/order")
    public String addOrder(@RequestBody Order order){

        orderRepo.save(order);
        return "order added";
    }

    @GetMapping("/buyerorders/{id}")
    public List<Order> getBuyerOrders(@PathVariable String id){
        return orderRepo.findBySellerid(id);
    }

    @GetMapping("/selleroders/{id}")
    public List<Order> getSellerOrders(@PathVariable String id){
        return orderRepo.findBySellerid(id);
    }

    @PostMapping("/sellerorder")
    public String updateSellerOrderStatus(@RequestBody Order order){
        orderRepo.insert(order);
        return "update order status";
    }
}
