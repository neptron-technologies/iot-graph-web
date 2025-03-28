using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Test_API.Models;

public partial class graphsDBContext : DbContext
{
    public graphsDBContext()
    {
    }

    public graphsDBContext(DbContextOptions<graphsDBContext> options)
        : base(options)
    {
    }

    public virtual DbSet<TrendDataValue> TrendDataValues { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=localhost;Database=graphs;trusted_connection=true;Trust Server Certificate=True;Encrypt=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<TrendDataValue>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("trend data value");

            entity.Property(e => e.Ai34111bpv).HasColumnName("AI34111BPV");
            entity.Property(e => e.Ai34111cpv).HasColumnName("AI34111CPV");
            entity.Property(e => e.Ai34111dpv).HasColumnName("AI34111DPV");
            entity.Property(e => e.Ai34722pv).HasColumnName("AI34722PV");
            entity.Property(e => e.Date).HasColumnType("datetime");
            entity.Property(e => e.Fc34115pv).HasColumnName("FC34115PV");
            entity.Property(e => e.Fc34116pv).HasColumnName("FC34116PV");
            entity.Property(e => e.Fc34116sv).HasColumnName("FC34116SV");
            entity.Property(e => e.Fc34122pv).HasColumnName("FC34122PV");
            entity.Property(e => e.Fc34122sv).HasColumnName("FC34122SV");
            entity.Property(e => e.Fc34155pv).HasColumnName("FC34155PV");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
