﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using NutriAPI.Models;

namespace NutriAPI.Migrations
{
    [DbContext(typeof(NutriAPIContext))]
    partial class NutriAPIContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.4-servicing-10062")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("NutriAPI.Models.Supplement", b =>
                {
                    b.Property<int>("SupplementId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Contraindications")
                        .IsRequired();

                    b.Property<string>("Dosing")
                        .IsRequired();

                    b.Property<string>("Name")
                        .IsRequired();

                    b.Property<string>("Type")
                        .IsRequired();

                    b.HasKey("SupplementId");

                    b.ToTable("Supplements");

                    b.HasData(
                        new
                        {
                            SupplementId = 1,
                            Contraindications = "Milk Thistle may lower blood sugar levels in people with type 2 diabetes. Those with allergies to plants in the same family as Milk Thistle (ragweed, marigold, etc.) may experience a reaction.",
                            Dosing = "According to research, the therapeutic threshold may be around 225mg per day.",
                            Name = "Milk Thistle",
                            Type = "Herb"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}